import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/Card';
import { Award, Eye, HeartHandshake, Shield, Target, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const About = () => {

    const values = [
        {
            icon: Target,
            title: "Strategic Focus",
            description:
                "We identify and invest in high-potential business opportunities with proven market demand and sustainable growth prospects.",
        },
        {
            icon: Users,
            title: "Collaborative Partnership",
            description:
                "Our success is built on strong partnerships, shared expertise, and collective decision-making among all group members.",
        },
        {
            icon: TrendingUp,
            title: "Sustainable Growth",
            description:
                "We reinvest profits strategically to ensure long-term value creation, portfolio diversification, and member prosperity.",
        },
        {
            icon: Shield,
            title: "Risk Management",
            description:
                "Careful analysis and risk assessment ensure every investment decision is backed by thorough research and market understanding.",
        },
        {
            icon: HeartHandshake,
            title: "Trust & Transparency",
            description:
                "Open communication, transparent reporting, and ethical business practices form the foundation of our operations.",
        },
        {
            icon: Award,
            title: "Excellence Commitment",
            description:
                "We strive for excellence in every project, maintaining our 70% success rate through dedication and professional expertise.",
        },
    ]

    const timeline = [
        {
            year: "2022",
            title: "Foundation & Vision",
            description:
                "Vaizans Group established with initial focus on agricultural ventures and collaborative investment model",
            milestone: "Group Formation",
        },
        {
            year: "2023",
            title: "First Major Successes",
            description:
                "Completed highly profitable pond fishing and hen farming projects, establishing our reputation for well returns",
            milestone: "Proven Track Record",
        },
        {
            year: "2024",
            title: "Portfolio Diversification",
            description:
                "Expanded into retail and livestock sectors with Eid Panjabi sales and cow rearing projects achieving exceptional profits",
            milestone: "Market Expansion",
        },
        {
            year: "2025",
            title: "Property Investment Focus",
            description:
                "Strategic shift towards property investments, land acquisition, and business expansion with enhanced capital base",
            milestone: "Future Growth",
        },
    ]

    const achievements = [
        { metric: "৳15L+", label: "Total Investment Capital", description: "Combined investment across all projects" },
        { metric: "৳20L+", label: "Total Returns Well", description: "Cumulative profits for all members" },
        { metric: "70%", label: "Average Profit Margin", description: "Consistent high returns across sectors" },
        { metric: "1%", label: "Investment Losses", description: "Perfect track record maintained" },
    ]



    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="bg-yellow-500 text-blue-900 font-semibold px-4 py-2 mb-6">
                            Established 2021 • 70% Success Rate
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Vaizans Group</h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                            A collaborative group dedicated to creating profitable ventures through strategic partnerships,
                            smart investments, and unwavering commitment to member success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card className="p-8 border-l-4 border-l-blue-900 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-6">
                                <Target className="w-10 h-10 text-blue-900 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                To create sustainable wealth through strategic business investments while fostering a collaborative
                                environment where every member contributes to and benefits from our collective success.
                            </p>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Guarantee profitable returns for all members</li>
                                <li>• Maintain 70% success rate across all ventures</li>
                                <li>• Foster collaborative decision-making</li>
                                <li>• Create long-term wealth for stakeholders</li>
                            </ul>
                        </Card>

                        <Card className="p-8 border-l-4 border-l-yellow-500 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-6">
                                <Eye className="w-10 h-10 text-yellow-600 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                To become Bangladeshs leading business group, known for profitable ventures, ethical practices, and
                                creating opportunities for growth and prosperity for all stakeholders.
                            </p>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Leading business group in Bangladesh</li>
                                <li>• Recognized for ethical business practices</li>
                                <li>• Expanding across multiple sectors</li>
                                <li>• Creating nationwide opportunities</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The fundamental principles that guide our business decisions, partnerships, and commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card
                                key={index}
                                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <CardContent className="p-8">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
                                        <value.icon className="w-10 h-10 text-blue-900" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Growth Timeline */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Growth Journey</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Key milestones in our business development, expansion, and achievement of consistent profitable returns
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                        <div className="space-y-16">
                            {timeline.map((item, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                                        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                            <CardContent className="p-8">
                                                <Badge className="mb-4 bg-blue-900 text-white font-semibold">{item.year}</Badge>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                                                <Badge variant="outline" className="text-blue-700 border-blue-200">
                                                    {item.milestone}
                                                </Badge>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="relative flex items-center justify-center w-12 h-12 bg-blue-900 rounded-full border-4 border-white shadow-xl z-10">
                                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Quantifiable results that demonstrate our commitment to profitable growth and member success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center flex flex-col">
                                <div className="flex-1 bg-white/10 rounded-2xl  p-8 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col justify-center">
                                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">{achievement.metric}</div>
                                    <div className="text-xl font-semibold text-white mb-2">{achievement.label}</div>
                                    <div className="text-sm text-blue-200">{achievement.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Be Part of Our Success?</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Join Vaizans Group and become part of Bangladeshs most successful business partnership. Experience
                        Well returns and collaborative growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg"
                        >
                            <Link href="/join">Join Our Group</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold px-8 py-4 text-lg bg-transparent"
                        >
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;