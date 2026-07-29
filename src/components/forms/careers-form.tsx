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
import { applicantTypes, interestAreas, applicationChecklist } from "@/content/careers-options";
import { siteConfig } from "@/config/site";
import { careersSchema, type CareersFormValues } from "@/lib/schemas/careers";

export function CareersForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CareersFormValues>({
    resolver: zodResolver(careersSchema),
    defaultValues: {
      name: "",
      email: "",
      applicantType: "",
      interest: "",
      resumeLink: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: CareersFormValues) => {
    setStatus("submitting");

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong sending your application. Please try again, or email us directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-surface-1 p-10 text-center">
        <CheckCircle2 className="size-10 text-brand-orange-text" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-foreground">Application sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          {`Thanks for applying — your application has been sent to our team at ${siteConfig.email.hr} and we'll be in touch.`}
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
          <Label htmlFor="email">Email</Label>
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

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="applicantType">You are a</Label>
          <Select
            value={watch("applicantType")}
            onValueChange={(value) => setValue("applicantType", value, { shouldValidate: true })}
          >
            <SelectTrigger id="applicantType" className="w-full" aria-invalid={!!errors.applicantType}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {applicantTypes.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.applicantType && (
            <p className="text-xs text-destructive">{errors.applicantType.message}</p>
          )}
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
        <Label htmlFor="resumeLink">Resume / portfolio link</Label>
        <Input
          id="resumeLink"
          placeholder="Link to your resume, LinkedIn, GitHub or portfolio"
          aria-invalid={!!errors.resumeLink}
          {...register("resumeLink")}
        />
        {errors.resumeLink && (
          <p className="text-xs text-destructive">{errors.resumeLink.message}</p>
        )}
        <p className="text-xs text-muted-foreground">
          Mailto links can&apos;t carry file attachments — share a link, or attach your resume
          directly once your email client opens.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Tell us about yourself</Label>
        <Textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          placeholder="Your background, what you're looking for, and why Cubegle."
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {applicationChecklist.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending your application
          </>
        ) : (
          "Submit application"
        )}
      </Button>
    </form>
  );
}
