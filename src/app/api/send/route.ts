import { prisma } from "@/db/prisma";
import { EmailTemplate } from "@/lib/resend/template";
import { env } from "process";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(env.RESEND_API_KEY);

const contactSheme = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  message: z.string().optional(),
  propertyId: z.string().optional(),
});

export async function POST(request: Request) {
  const data = await request.json();
  const safeData = contactSheme.parse(data);
  try {
    const contact = await prisma.contact.create({
      data: safeData,
    });

    const data = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: "babaplace9@gmail.com",
      subject: "Prise de Contact",
      react: EmailTemplate({ userConctact: safeData }),
      text: "",
    });

    return Response.json({ data, contact });
  } catch (error) {
    return Response.json({ error });
  }
}
