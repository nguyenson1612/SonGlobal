import { type NextRequest, NextResponse } from "next/server";

import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async () => {
  const isAdminUser = await isAdmin();
  if (!isAdminUser) return new NextResponse("Unauthorized.", { status: 401 });

  const data = await db.query.units.findMany();

  return NextResponse.json(data);
};

export const POST = async (req: NextRequest) => {
  const isAdminUser = await isAdmin();
  if (!isAdminUser) return new NextResponse("Unauthorized.", { status: 401 });

  const body = (await req.json()) as typeof units.$inferSelect;

  const data = await db
    .insert(units)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};