"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function FeedbackForm() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-[#0A0A0A]/95 p-8 rounded-lg shadow-2xl backdrop-blur-sm border border-zinc-900 relative">
                <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full" />
                <div className="relative space-y-6">
                    <div className="flex w-full justify-center py-2">
                        <Label htmlFor="feedbackType" className="text-orange-500/100 text-2xl">
                            Feedback Form
                        </Label>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="feedbackType" className="text-orange-500/90">
                            Feedback Type
                        </Label>
                        <Select>
                            <SelectTrigger
                                id="feedbackType"
                                className="bg-black/50 border-zinc-800/50 focus:ring-0 focus:ring-offset-0 text-slate-300"
                            >
                                <SelectValue className="text-zinc-700" placeholder="Select feedback type" />
                            </SelectTrigger>
                            <SelectContent className="border-zinc-800 ">
                                <SelectItem value="comment">Comment</SelectItem>
                                <SelectItem value="suggestion">Suggestion</SelectItem>
                                <SelectItem value="question">Question</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-orange-500/90">
                            Describe Your Feedback
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="Please provide details about your feedback"
                            className="bg-black/50 border-zinc-800/50 text-slate-200 placeholder:text-zinc-700 focus:ring-0 focus:ring-offset-0 min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-orange-500/90">Name</Label>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                id="firstName"
                                placeholder="First Name"
                                className="bg-black/50 border-zinc-800/50 text-slate-200 placeholder:text-zinc-700 focus:ring-0 focus:ring-offset-0"
                            />
                            <Input
                                id="lastName"
                                placeholder="Last Name"
                                className="bg-black/50 border-zinc-800/50 text-slate-200 placeholder:text-zinc-700 focus:ring-0 focus:ring-offset-0"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-orange-500/90">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="bg-black/50 border-zinc-800/50 text-slate-200 placeholder:text-zinc-700 focus:ring-0 focus:ring-offset-0"
                        />
                    </div>

                    <Button className="w-full bg-orange-500/90 hover:bg-orange-600/90 text-zinc-900 font-medium transition-colors">
                        Submit Feedback
                    </Button>
                </div>
            </div>
        </div>
    )
}

