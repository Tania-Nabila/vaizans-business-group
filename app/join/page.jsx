"use client"

import { useState } from "react"

import { Users, TrendingUp, Shield, Award, CheckCircle, ArrowRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Label } from "../../components/ui/Label"
import { Input } from "../../components/ui/Input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/Select"
import { RadioGroup, RadioGroupItem } from "../../components/ui/Radio-group"
import { Textarea } from "../../components/ui/Textarea"
import { Button } from "../../components/ui/Button"
import { Checkbox } from "../../components/ui/Checkbox"
import { Badge } from "../../components/ui/Badge"
import Swal from "sweetalert2";

export default function JoinPage() {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    investmentCapacity: "",
    preferredGroup: "",
    businessBackground: "",
    motivation: "",
    agreeTerms: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your message has been sent successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          referral: "",
          description: "",
          nda: false,
        });
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }


    // console.log("Application submitted:", formData)
    // Handle form submission
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const benefits = [
    {
      icon: TrendingUp,
      title: "Well Returns",
      description: "70% success rate across all 7 completed projects with average 95% profit margins",
    },
    {
      icon: Users,
      title: "Expert Partnership",
      description: "Join 13+ experienced members with proven track record in multiple business sectors",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and strategic planning for every investment decision",
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "৳65L+ total returns generated with zero investment losses in our history",
    },
  ]

  const requirements = [
    "Minimum investment capacity of ৳50,000 for Group B",
    "Commitment to collaborative decision-making process",
    "Active participation in monthly group meetings",
    "Professional background or business experience preferred",
    "Willingness to contribute expertise and time to projects",
    "Agreement to profit-sharing and reinvestment strategy",
  ]

  const groupOptions = [
    {
      name: "Group B",
      status: "Open for New Members",
      description: "Growing partners bringing fresh perspectives and capital",
      minInvestment: "৳50,000",
      currentMembers: 3,
      maxMembers: 8,
      benefits: ["Equal profit sharing", "Voting rights", "Project participation", "Mentorship from Group A"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-yellow-500 text-blue-900 font-semibold px-4 py-2 mb-6">
              Limited Spots Available • Group B Expansion
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Vaizans Group</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Become part of Bangladeshs most successful business partnership. Experience well returns,
              collaborative growth, and professional development with our proven investment strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Vaizans Group?</h2>
            <p className="text-lg text-gray-600">Exclusive benefits and opportunities for our group members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Group Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Membership Options</h2>
            <p className="text-lg text-gray-600">Choose the group that matches your investment capacity and goals</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {groupOptions.map((group, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-blue-900">{group.name}</CardTitle>
                    <Badge className="bg-green-100 text-green-800">{group.status}</Badge>
                  </div>
                  <p className="text-gray-600">{group.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600">Min. Investment</div>
                      <div className="font-bold text-gray-900">{group.minInvestment}</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">Available Spots</div>
                      <div className="font-bold text-blue-900">
                        {group.maxMembers - group.currentMembers} of {group.maxMembers}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Member Benefits:</h4>
                    {group.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Application</h2>
            <p className="text-lg text-gray-600">Fill out the form below to start your journey with Vaizans Group</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location/City *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Background */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Background</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="experience">Years of Business Experience</Label>
                      <Select onValueChange={(value) => handleChange("experience", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="investmentCapacity">Investment Capacity *</Label>
                      <Select onValueChange={(value) => handleChange("investmentCapacity", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select investment range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50k-1L">৳50,000 - ৳1,00,000</SelectItem>
                          <SelectItem value="1L-3L">৳1,00,000 - ৳3,00,000</SelectItem>
                          <SelectItem value="3L-5L">৳3,00,000 - ৳5,00,000</SelectItem>
                          <SelectItem value="5L+">৳5,00,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Preferred Group *</Label>
                      <RadioGroup
                        value={formData.preferredGroup}
                        onValueChange={(value) => handleChange("preferredGroup", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="group-b" id="group-b" />
                          <Label htmlFor="group-b">Group B (Growing Partners)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="businessBackground">Business Background & Expertise</Label>
                      <Textarea
                        id="businessBackground"
                        rows={4}
                        value={formData.businessBackground}
                        onChange={(e) => handleChange("businessBackground", e.target.value)}
                        placeholder="Describe your business experience, skills, and areas of expertise..."
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="motivation">Why do you want to join Vaizans Group? *</Label>
                      <Textarea
                        id="motivation"
                        rows={4}
                        value={formData.motivation}
                        onChange={(e) => handleChange("motivation", e.target.value)}
                        placeholder="Tell us about your motivation, goals, and what you can contribute to the group..."
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Membership Requirements</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-700 mb-4">Please review the following requirements:</p>
                    <ul className="space-y-2">
                      {requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleChange("agreeTerms", checked)}
                  />
                  <Label htmlFor="agreeTerms" className="text-sm text-gray-700 leading-relaxed">
                    I agree to the terms and conditions, understand the membership requirements, and commit to active
                    participation in Vaizans Group activities. I acknowledge that investment decisions are made
                    collectively and profits are shared according to group policies.
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg"
                    disabled={!formData.agreeTerms}
                  >
                    {loading ? "Sending..." : "Submit Application"} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    Well review your application and contact you within 3-5 business days.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
