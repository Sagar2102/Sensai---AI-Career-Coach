"use client"

import { onboardingSchema } from "@/app/lib/schema";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


const OnboardingForm = ({industries}) => {
    const router = useRouter();
    const [selectedIndustry, setSelectedIndustry] = useState(null);



    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
      } = useForm({
        resolver: zodResolver(onboardingSchema),
      });
  return <div>
    <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className="gradient-title text-4xl">
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            Select your industry to get personalized career insights and
            recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <p>Card Content</p>
        </CardContent>
        </Card>
  </div>
}

export default OnboardingForm