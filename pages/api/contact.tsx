import Email from '@/components/contact/EmailTemplate';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ result: 0 });
        return;
    }
    if (!req.body) {
        res.status(400).json({ result: 1 });
        return;
    }

    const { name, email, message }: { name: string; email: string; message: string } = req.body;

    if (!name) {
        res.status(400).json({ result: 2 });
        return;
    }
    if (!email) {
        res.status(400).json({ result: 3 });
        return;
    }
    if (!message) {
        res.status(400).json({ result: 4 });
        return;
    }
    const emailValid = () => {
        if (email.length > 320) return false;
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            email
        );
    };
    if (!emailValid()) {
        res.status(400).json({ result: 5 });
        return;
    }

    const params = {
        username: name,
        avatar_url: process.env.AVATAR_URL,
        embeds: [
            {
                fields: [
                    { name: 'Name', value: name },
                    {
                        name: 'Email',
                        value: email,
                    },
                    { name: 'Message', value: message },
                ],
            },
        ],
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    };

    try {
        resend.emails.send({
            from: 'Jitencodes Portfolio <onboarding@resend.dev>',
            to: 'jitendra.s1487@gmail.com',
            reply_to: email as string,
            subject: 'New message from your portfolio site!',
            react: <Email authorEmail={email} authorName={name} message={message} />
          });
          res.status(200).json({ result: 6 });
        return;
    } catch (error) {
        res.status(500).json({ result: 7 });
        return;
    }
}
