import { Container } from '@/components/Container';
import { Paragraph } from '@/components/Paragraph';
import { TwoPaneWrapper } from '@/components/TwoPaneWrapper';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex-1">
      <Container className="py-10">
        <TwoPaneWrapper
          left={
            <div className="relative w-full h-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={'/images/key-2.dfb856efe87b2e352f17.png'}
                alt={'houses image'}
                fill
                className="object-cover"
              />
            </div>
          }
          right={
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                About us
              </h1>

              <Paragraph>
                Welcome to Cyeta Ltd. With a collective experience of numerous
                years in the construction industry, our team is not just a group
                of experts; we’re a family dedicated to making your dreams a
                reality. At Cyeta Ltd, we believe that construction is not just
                about building structures; it’s about building relationships.
              </Paragraph>

              <Paragraph>
                Our approach is simple: “Make it nice, make it fast.” We
                understand that your time is valuable, and so is a job well
                done. Our team thrives on effective communication, ensuring we
                not only meet but exceed your expectations. We take pride in
                being a company you’ll remember and recommend - not just for the
                quality of our work but for the friendly and collaborative
                experience we provide.
              </Paragraph>

              <Paragraph>
                What sets us apart is our unique blend of experience and
                artistic thinking. Every member of our team brings a creative
                touch to the construction process, allowing us to find
                innovative solutions and think beyond the standard approaches.
                We’re not just builders; we’re experts who turn your ideas into
                beautifully crafted spaces.
              </Paragraph>

              <Paragraph>
                Our commitment goes beyond completing projects; it’s about
                understanding your needs and bringing them to life. We work
                closely with you, utilising our artful approach to deliver
                results that stand out. Explore the difference a friendly and
                efficient team can make at Cyeta LTd. Thank you for considering
                us as your construction partner; we look forward to creating
                something exceptional together.
              </Paragraph>
            </div>
          }
        />
      </Container>
    </main>
  );
}
