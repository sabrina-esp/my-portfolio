import { Container } from "@/components/layout/container";

export function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="py-24">
      <Container>
        <h1 className="text-5xl font-semibold tracking-tight">{title}</h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}