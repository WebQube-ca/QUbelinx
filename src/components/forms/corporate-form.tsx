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
  company: z.string().min(2),
  contactName: z.string().min(2),
  phone: z.string().min(10),
  quantity: z.string().min(1),
  branding: z.string().optional(),
  details: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function CorporateForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const text = `Corporate Gifting Inquiry\nCompany: ${data.company}\nContact: ${data.contactName}\nPhone: ${data.phone}\nQuantity: ${data.quantity}\nBranding: ${data.branding || "N/A"}\n\n${data.details}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="company">Company Name</Label>
        <Input id="company" {...register("company")} className="mt-2" />
        {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="corp-contact">Contact Person</Label>
          <Input id="corp-contact" {...register("contactName")} className="mt-2" />
        </div>
        <div>
          <Label htmlFor="corp-phone">Phone</Label>
          <Input id="corp-phone" type="tel" {...register("phone")} className="mt-2" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input id="quantity" {...register("quantity")} className="mt-2" placeholder="e.g. 50 boxes" />
        </div>
        <div>
          <Label htmlFor="branding">Custom Branding?</Label>
          <Input id="branding" {...register("branding")} className="mt-2" placeholder="Logo, colours..." />
        </div>
      </div>
      <div>
        <Label htmlFor="corp-details">Requirements</Label>
        <Textarea id="corp-details" {...register("details")} className="mt-2" />
      </div>
      <Button type="submit" className="w-full">
        Request Corporate Quote
      </Button>
    </form>
  );
}
