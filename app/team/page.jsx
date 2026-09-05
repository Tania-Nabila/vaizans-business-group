import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Badge } from "../../components/ui/Badge"
import { Button } from "../../components/ui/Button"
import Link from "next/link"
import Image from "next/image"
import { Icon } from "../../components/ui/Icon"
import { SectionHeader } from "../../components/ui/SectionHeader"
import { TEAM_GROUPS, TEAM_MEMBER } from "../../lib/constants"


export default function TeamPage() {

    const teamStats = [
        {
            label: "Total Members",
            value: "15+",
            description: "Active contributing members",
            icon: "Users",
        },
        {
            label: "Combined Experience",
            value: "5+",
            description: "Years of business expertise",
            icon: "Award",
        },
        {
            label: "Total Investment",
            value: "৳15L+",
            description: "Combined member investments",
            icon: "DollarSign",
        },
        {
            label: "Success Rate",
            value: "70%",
            description: "Profitable project completion",
            icon: "Target",
        },
    ]

    const groupAMembers = TEAM_MEMBER.filter((member) => member.group === "Group A")
    const groupBMembers = TEAM_MEMBER.filter((member) => member.group === "Group B")

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="bg-yellow-500 text-blue-900 font-semibold px-4 py-2 mb-6">Meet Our Expert Team</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team of Experts</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Meet the dedicated professionals behind Vaizans Groups success. Our diverse team of 13+ members brings
                            together decades of experience in business, finance, agriculture, and technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamStats.map((stat, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                                        <Icon name={stat.icon} className="w-6 h-6 text-blue-900" />
                                    </div>
                                    <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                                    <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                                    <div className="text-sm text-gray-600">{stat.description}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Group Structure Overview */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Team Structure"
                        subtitle="Our collaborative partnership model with two dynamic groups working together for success"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {TEAM_GROUPS.map((group, index) => {
                            const colors = [
                                {
                                    bg: "bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-800",
                                    border: "border-yellow-300",
                                    icon: "Crown",
                                },
                                {
                                    bg: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800",
                                    border: "border-blue-300",
                                    icon: "Users",
                                },
                            ]
                            const color = colors[index]

                            return (
                                <Card key={index} className={`border-2 ${color.border} hover:shadow-xl transition-shadow`}>
                                    <CardContent className="p-8">
                                        <div className="flex items-center mb-6">
                                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mr-6 ${color.bg}`}>
                                                <Icon name={color.icon} className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{group.group}</h3>
                                                <Badge variant="outline" className="mt-1">
                                                    {group.status}
                                                </Badge>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-6">{group.description}</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                <div className="text-2xl font-bold text-gray-900">{group.members}</div>
                                                <div className="text-sm text-gray-600">Members</div>
                                            </div>
                                            <div className="text-center p-3 bg-green-50 rounded-lg">
                                                <div className="text-2xl font-bold text-green-700">{group.totalInvestment}</div>
                                                <div className="text-sm text-gray-600">Investment</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Group A Members */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Group A - Senior Partners</h2>
                            <p className="text-lg text-gray-600">
                                Experienced leaders driving strategic decisions and major investments
                            </p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-lg">
                            {/* {groupAMembers.length} */}
                            10 Members</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {groupAMembers.map((member) => (
                            <Card
                                key={member.id}
                                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <CardHeader className="text-center pb-4">
                                    <div className="relative w-32 h-32 mx-auto mb-4">
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            fill
                                            className="rounded-full object-cover border-4 border-white shadow-lg"
                                        />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                                    <p className="text-blue-700 font-semibold">{member.role}</p>
                                    <Badge variant="outline" className="mt-2">
                                        {member.group}
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div className="text-center p-2 bg-gray-50 rounded">
                                                <div className="font-semibold text-gray-900">{member.projects}</div>
                                                <div className="text-gray-600">Projects</div>
                                            </div>
                                            <div className="text-center p-2 bg-blue-50 rounded">
                                                <div className="font-semibold text-blue-700">{member.investment}</div>
                                                <div className="text-gray-600">Investment</div>
                                            </div>
                                        </div>

                                        {/* <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {member.expertise.slice(0, 3).map((skill, index) => (
                                                    <Badge key={index} variant="secondary" className="text-xs">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                                {member.expertise.length > 3 && (
                                                    <Badge variant="secondary" className="text-xs">
                                                        +{member.expertise.length - 3} more
                                                    </Badge>
                                                )}
                                            </div>
                                        </div> */}

                                        <p className="text-sm text-gray-600 line-clamp-3">{member.bio}</p>

                                        <div className="flex items-center justify-between pt-2">
                                            <div className="text-xs text-gray-500">
                                                <Icon name="Calendar" className="w-3 h-3 inline mr-1" />
                                                Joined {member.joinDate}
                                            </div>
                                            {member.contact?.email && (
                                                <Button variant="ghost" size="sm" asChild>
                                                    <Link href={`mailto:${member.contact.email}`}>
                                                        <Icon name="Mail" className="w-4 h-4" />
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Group B Members */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Group B - Growing Partners</h2>
                            <p className="text-lg text-gray-600">Dynamic members bringing innovation and fresh perspectives</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">
                            {/* {groupBMembers.length} */}
                            5 Members</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {groupBMembers.map((member) => (
                            <Card
                                key={member.id}
                                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <CardHeader className="text-center pb-4">
                                    <div className="relative w-32 h-32 mx-auto mb-4">
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            fill
                                            className="rounded-full object-cover border-4 border-white shadow-lg"
                                        />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                                    <p className="text-blue-700 font-semibold">{member.role}</p>
                                    <Badge variant="outline" className="mt-2">
                                        {member.group}
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div className="text-center p-2 bg-gray-50 rounded">
                                                <div className="font-semibold text-gray-900">{member.projects}</div>
                                                <div className="text-gray-600">Projects</div>
                                            </div>
                                            <div className="text-center p-2 bg-blue-50 rounded">
                                                <div className="font-semibold text-blue-700">{member.investment}</div>
                                                <div className="text-gray-600">Investment</div>
                                            </div>
                                        </div>
                                        {/* 
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {member.expertise.slice(0, 3).map((skill, index) => (
                                                    <Badge key={index} variant="secondary" className="text-xs">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                                {member.expertise.length > 3 && (
                                                    <Badge variant="secondary" className="text-xs">
                                                        +{member.expertise.length - 3} more
                                                    </Badge>
                                                )}
                                            </div>
                                        </div> */}

                                        <p className="text-sm text-gray-600 line-clamp-3">{member.bio}</p>

                                        <div className="flex items-center justify-between pt-2">
                                            <div className="text-xs text-gray-500">
                                                <Icon name="Calendar" className="w-3 h-3 inline mr-1" />
                                                Joined {member.joinDate}
                                            </div>
                                            {member.contact?.email && (
                                                <Button variant="ghost" size="sm" asChild>
                                                    <Link href={`mailto:${member.contact.email}`}>
                                                        <Icon name="Mail" className="w-4 h-4" />
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Spotlight */}
            <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Leadership Excellence</h2>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Our leadership team combines decades of experience with innovative thinking to drive consistent success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {TEAM_MEMBER.slice(0, 2).map((leader) => (
                            <Card key={leader.id} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                                <CardContent className="p-8">
                                    <div className="flex items-start space-x-6">
                                        <div className="relative w-24 h-24 flex-shrink-0">
                                            <Image
                                                src={leader.image || "/placeholder.svg"}
                                                alt={leader.name}
                                                fill
                                                className="rounded-full object-cover border-3 border-white/30"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                                            <p className="text-yellow-300 font-semibold mb-3">{leader.role}</p>
                                            <p className="text-blue-100 text-sm mb-4 line-clamp-3">{leader.bio}</p>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-sm">Key Achievements:</h4>
                                                <ul className="text-sm text-blue-100 space-y-1">
                                                    {leader.achievements.slice(0, 2).map((achievement, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <Icon name="CheckCircle" className="w-3 h-3 mr-2 mt-0.5 text-yellow-400 flex-shrink-0" />
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team CTA */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Join Our Success Story?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Were always looking for talented individuals who share our vision of collaborative success and profitable
                        growth. Join Group B and be part of our expanding team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg"
                        >
                            <Link href="/join">Apply to Join Group B</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold px-8 py-4 text-lg bg-transparent"
                        >
                            <Link href="/contact">Contact Our Team</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
