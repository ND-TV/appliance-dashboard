import prisma from "@/lib/prisma";
import { Appliance } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const appliances: Appliance[] = await prisma.appliance.findMany();
  return NextResponse.json(appliances);
}

export async function POST(req: Request) {
  const requestBody: Appliance = await req.json();
  const newAppliance: Appliance = await prisma.appliance.create({
    data: requestBody,
  });

  return NextResponse.json(newAppliance.id);
}
