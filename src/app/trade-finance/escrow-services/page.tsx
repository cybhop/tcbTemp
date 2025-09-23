import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escrow Services | Trade Credit Bancorp",
  description:
    "Secure, compliant escrow services facilitating trusted international trade transactions.",
};

export default function EscrowServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-primary">Escrow Services</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          We provide secure escrow solutions to protect buyers and sellers in international trade.
          Detailed content for this page will be added soon.
        </p>
      </section>
    </main>
  );
}