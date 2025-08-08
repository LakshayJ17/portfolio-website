import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";

export default function ContactPage() {
    return (
        <div>
            <div className="flex min-h-screen items-start justify-start">
                <Container className="min-h-screen px-6 md:pt-20 md:pb-10">
                    <Scales />
                    <Heading>Contact Me</Heading>
                    <Subheading>
                        I&apos;m open to freelancing offers and full time job roles. Reach
                        out to me to inquire more about my work
                    </Subheading>
                    <ContactForm />
                </Container>
            </div>
        </div>
    );
}
