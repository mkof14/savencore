/** Client-safe invite URL helper (D-0178). */
export function inviteSignInPath(locale: string, token: string): string {
  return `/${locale}/auth/sign-in/?invite=${encodeURIComponent(token)}`;
}

export function inviteAcceptPath(locale: string, token: string): string {
  return `/${locale}/auth/accept-invite/?token=${encodeURIComponent(token)}`;
}
