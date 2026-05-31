"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_NUMBER } from "@/lib/utils";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone required"),
  message: z.string().min(10, "Tell us about your order"),
});

type FormData = z.infer<typeof schema>;

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const text = `Hi Plate Date! Inquiry from ${data.name}\nPhone: ${data.phone}\n\n${data.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-center py-8 text-brand-primary font-medium">
        Opening WhatsApp to complete your inquiry...
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} className="mt-2" />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" {...register("phone")} className="mt-2" />
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} className="mt-2" />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" variant="default">
        Send via WhatsApp
      </Button>
    </form>
  );
}
