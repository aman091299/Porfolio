import AboutSignature from "./AboutSignature";
import { Container, SectionHeading } from "./primitives";

const facts = [
  { label: "Experience", value: "2+ years" },
  { label: "Currently", value: "Atravelq" },
  { label: "Based in", value: "India" },
  { label: "Core stack", value: "MERN + Next.js" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="min-w-0 md:col-span-5">
          <SectionHeading lead="Where the web" highlight="meets AI." />
        </div>

        <div className="min-w-0 md:col-span-7 md:pt-3" data-aos="fade-up" data-aos-delay="100">
          <p className="max-w-[60ch] text-xl leading-relaxed md:text-2xl md:leading-snug">
            I&apos;m a full stack developer with over two years of building production websites, web
            apps and online stores.
          </p>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted">
            Most of my work runs from React and Next.js front ends to Node.js and Express APIs on
            MongoDB, MySQL or PostgreSQL. When a project needs a CMS I work in WordPress, Shopify and
            Strapi, and I build AI features with LLMs, RAG and agentic workflows on OpenAI.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1 font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <AboutSignature />
          </div>
        </div>
      </Container>
    </section>
  );
}
