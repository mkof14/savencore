import type { DefaultSession } from "next-auth";

import type { AdminRole } from "@/admin/roles";

declare module "next-auth" {
  interface Session {
    user: {
      role?: AdminRole | null;
    } & DefaultSession["user"];
  }

  interface User {
    role?: AdminRole | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: AdminRole | null;
  }
}
