import prisma from "@/lib/prisma";
import { Appliance } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, route: { params: { id: string } }) {
  const id = Number(route.params.id);
  const appliance: Appliance | null = await prisma.appliance.findFirst({
    where: {
      id: id,
    },
  });

  return NextResponse.json(appliance);
}

export async function PUT(req: NextRequest, route: { params: { id: string } }) {
  const requestBody: Appliance = await req.json();
  const id = Number(route.params.id);
  const newAppliance: Appliance = await prisma.appliance.update({
    where: {
      id: id,
    },
    data: requestBody,
  });
  return NextResponse.json(newAppliance);
}

export async function DELETE(
  req: NextRequest,
  route: { params: { id: string } }
) {
  const id = Number(route.params.id);
  const deletedAppliance: Appliance = await prisma.appliance.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json(deletedAppliance);
}
