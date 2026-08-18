import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, BookMarked, GraduationCap, MonitorCheck } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const upcoming = [
  { icon: GraduationCap, title: "Student Portal", body: "Timetables, assignments and personal academic records." },
  { icon: BookMarked, title: "Teacher Portal", body: "Class management, attendance and lesson resources." },
  { icon: MonitorCheck, title: "CBT Examinations", body: "Secure computer-based testing with instant submission." },
  { icon: BarChart3, title: "Results & Analytics", body: "Termly results, progress tracking and performance insight." },
];

export const Route = createFileRoute("/student-portal")({
  head: () => ({
    meta: [
      { title: "Student Portal — Maxfem International School" },
      {
        name: "description",
        content:
          "The Maxfem International School student portal is in development. Secure access to timetables, results and examinations is coming soon.",
      },
      { property: "og:title", content: "Student Portal — Maxfem International School" },
      { property: "og:description", content: "Secure student access is coming soon." },
      { property: "og:url", content: "/student-portal" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/student-portal" }],
  }),
  component: StudentPortal,
});

function StudentPortal() {
  return (
    <>
      <PageHeader
        eyebrow="Portals"
        title="Secure portals are coming soon"
        description="Authenticated access for students, teachers and administrators is being developed as part of the next phase of the Maxfem platform."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="In development"
            title="What the platform will include"
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {upcoming.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-foreground">
              Need help in the meantime?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Login credentials will be issued by the school once the portal is live. For any
              academic or administrative request, please contact the school office.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link to="/contact">Contact the School Office</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
