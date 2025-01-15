import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>
      Nytt kontaktformulär från {firstName} {lastName}
    </h1>
    <p>E-post: {email}</p>
    {phone && <p>Telefon: {phone}</p>}
    <div>
      <h2>Meddelande:</h2>
      <p>{message}</p>
    </div>
  </div>
);
