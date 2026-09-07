"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  if (!validate()) return;

  setStatus("sending");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
}

  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <h1
        style={{ fontFamily: "var(--font-fraunces)" }}
        className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]"
      >
        Contact
      </h1>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6 max-w-md">
        <div>
          <label className="text-sm text-[var(--color-text-muted)]">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-transparent text-[var(--color-text)]"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="text-sm text-[var(--color-text-muted)]">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-transparent text-[var(--color-text)]"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="text-sm text-[var(--color-text-muted)]">Message</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-transparent text-[var(--color-text)]"
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="self-start bg-[var(--color-accent)] text-white px-6 py-2 hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600">Message sent — thanks for reaching out!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">Something went wrong. Try again.</p>
        )}
      </form>
    </main>
  );
}