import { type NextRequest, NextResponse } from "next/server";

import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async () => {
  const isAdminUser = await isAdmin();
  if (!isAdminUser) return new NextResponse("Unauthorized.", { status: 401 });

  const data = await db.query.challengeOptions.findMany();

  return NextResponse.json(data);
};

export const POST = async (req: NextRequest) => {
  const isAdminUser = await isAdmin();
  if (!isAdminUser) return new NextResponse("Unauthorized.", { status: 401 });

  const body = (await req.json()) as typeof challengeOptions.$inferSelect;

  const data = await db
    .insert(challengeOptions)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};