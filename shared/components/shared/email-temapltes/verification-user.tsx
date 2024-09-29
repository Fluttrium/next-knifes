import React from 'react';

interface Props {
  code: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => (
  <div>
    <p>
      Код подтверждения: <h2>{code}</h2>
    </p>

    <p>
      <a href={`${baseUrl}/api/auth/verify?code=${code}`}>Подтвердить регистрацию</a>
    </p>
  </div>
);
