"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  eventDate: z.string().min(1),
  guestCount: z.string().min(1),
  details: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function BulkOrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const text = `Bulk Order Request\nName: ${data.name}\nPhone: ${data.phone}\nEvent Date: ${data.eventDate}\nGuests: ${data.guestCount}\n\n${data.details}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="bulk-name">Name</Label>
          <Input id="bulk-name" {...register("name")} className="mt-2" />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="bulk-phone">Phone</Label>
          <Input id="bulk-phone" type="tel" {...register("phone")} className="mt-2" />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="event-date">Event Date</Label>
          <Input id="event-date" type="date" {...register("eventDate")} className="mt-2" />
        </div>
        <div>
          <Label htmlFor="guests">Number of Guests</Label>
          <Input id="guests" {...register("guestCount")} className="mt-2" placeholder="e.g. 25" />
        </div>
      </div>
      <div>
        <Label htmlFor="bulk-details">Order Details</Label>
        <Textarea
          id="bulk-details"
          {...register("details")}
          className="mt-2"
          placeholder="Platters, dietary preferences, delivery location..."
        />
      </div>
      <Button type="submit" className="w-full">
        Request Bulk Quote
      </Button>
    </form>
  );
}
