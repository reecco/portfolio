import { Mail, ResponseMail } from "../@types";

export class Email {
  private readonly email: string = import.meta.env["VITE_SOME_EMAIL"];
  private readonly token: string = import.meta.env["VITE_SOME_TOKEN"];
  private body: Mail;

  constructor({ fromEmail, name, text }: Mail) {
    this.body = {
      fromEmail,
      toEmail: this.email,
      name,
      text,
    };
  }

  async send(): Promise<ResponseMail> {
    if (!this.token)
      return {
        code: 500,
        message: "Token not found.",
      };

    return await fetch("https://sendemails.vercel.app/api/v2/send/email", {
      method: "POST",
      headers: {
        authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.body),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
  }
}
