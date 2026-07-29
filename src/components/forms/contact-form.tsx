"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { engagementOptions, interestAreas, shareChecklist } from "@/content/contact-options";
import { siteConfig } from "@/config/site";
import { contactSchema, type ContactFormValues } from "@/lib/schemas/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      engagement: "",
      interest: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong sending your message. Please try again, or email us directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-surface-1 p-10 text-center">
        <CheckCircle2 className="size-10 text-brand-orange-text" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-foreground">Message sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          {`Thanks for reaching out — your message has been sent to our team at ${siteConfig.email.general} and we'll get back to you shortly.`}
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Back to form
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto size-px overflow-hidden"
        {...register("website")}
      />

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {errorMessage}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" autoComplete="organization" aria-invalid={!!errors.company} {...register("company")} />
        {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="engagement">Engagement type</Label>
          <Select
            value={watch("engagement")}
            onValueChange={(value) => setValue("engagement", value, { shouldValidate: true })}
          >
            <SelectTrigger id="engagement" className="w-full" aria-invalid={!!errors.engagement}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {engagementOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.engagement && <p className="text-xs text-destructive">{errors.engagement.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="interest">Area of interest</Label>
          <Select
            value={watch("interest")}
            onValueChange={(value) => setValue("interest", value, { shouldValidate: true })}
          >
            <SelectTrigger id="interest" className="w-full" aria-invalid={!!errors.interest}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {interestAreas.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.interest && <p className="text-xs text-destructive">{errors.interest.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          placeholder="What you're trying to solve, and where you are today."
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {shareChecklist.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending your message
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
