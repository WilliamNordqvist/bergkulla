"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "Förnamn är obligatoriskt.",
  }),
  lastName: z.string().min(1, {
    message: "Efternamn är obligatoriskt.",
  }),
  email: z.string().email({
    message: "Ogiltig e-postadress.",
  }),
  phone: z.string().optional(),
  message: z.string().min(1, {
    message: "Meddelande är obligatoriskt.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Något gick fel vid skickandet av meddelandet");
      }

      form.reset();
      alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Något gick fel vid skickandet av meddelandet. Försök igen senare."
      );
    }
  }

  return (
    <div className="pt-6 mx-auto max-w-2xl">
      <Link
        href="/"
        className="pb-6 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
      >
        <ArrowLeft size={24} />
      </Link>

      <h1 className="text-3xl font-bold mb-4">Kontakta oss</h1>
      <p className="mb-6">
        Här kan du göra en bokningsförfrågan eller höra av dig om du har frågor
        och funderingar. Om du är intresserad av att boka, glöm inte att ange
        vilka datum du är intresserad av i ditt meddelande.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Förnamn</FormLabel>
                  <FormControl>
                    <Input placeholder="Förnamn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Efternamn</FormLabel>
                  <FormControl>
                    <Input placeholder="Efternamn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-post</FormLabel>
                <FormControl>
                  <Input placeholder="din@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefonnummer (Valfritt)</FormLabel>
                <FormControl>
                  <Input placeholder="Telefonnummer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meddelande</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Skriv ditt meddelande här..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Skicka meddelande
          </Button>
        </form>
      </Form>
    </div>
  );
}
