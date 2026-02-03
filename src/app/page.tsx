"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { TheSelector } from "@/components/sections/TheSelector";
import { ServiceDetails } from "@/components/sections/ServiceDetails";
import { Philosophy } from "@/components/sections/Philosophy";
import { TheKnowmeMethod } from "@/components/sections/TheKnowmeMethod";
import { SocialProof } from "@/components/sections/SocialProof";
import { LeadForm } from "@/components/sections/LeadForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <PageLayout>
      <WhatsAppButton />

      {/* SECCIÓN 1: Hero & Identidad */}
      <Hero />

      {/* SECCIÓN 2: El Selector (Segmentación de Audiencia) */}
      <div id="selector">
        <TheSelector />
      </div>

      {/* SECCIÓN 3: Detalle de Servicios */}
      <div id="services">
        <ServiceDetails />
      </div>

      {/* Section: Philosophy (Injected between details and method as suggested) */}
      <Philosophy />

      {/* SECCIÓN 4: "The Knowme Method" (Proceso) */}
      <div id="process">
        <TheKnowmeMethod />
      </div>

      {/* SECCIÓN 5: Social Proof & Autoridad */}
      <SocialProof />

      {/* SECCIÓN 6: Formulario de Conversión (Footer Activo) */}
      <LeadForm />
    </PageLayout>
  );
}
