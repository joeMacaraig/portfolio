import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Img,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailTemplateProps = {
  message: string;
  senderEmail: string;
};

export default function EmailTemplate({
  message,
  senderEmail,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from Joseph's Portfolio website</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-whtie my-10 px-10 py-4 rounded-md bg-white">
              <Heading className="leading-tight">
                Joseph's Portfolio Website
              </Heading>
              {/* <Img
                src="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/262923522_316703030298835_5193522718327118272_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=5lFAN-j9sC0AX-AbJr9&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjcyMDIzNjU4MzQ3NjU1NzcyMQ%3D%3D.2-ccb7-5&oh=00_AfBeGED4VZPniG_tEei5IF70Mtr6WOgKS_VPwv-kqtOZQw&oe=65B3C766&_nc_sid=fc8dfb"
                alt="Cat"
                width="300"
                height="300"
              /> */}
              <Text>{message}</Text>
              <Hr />
              <Text>From: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

