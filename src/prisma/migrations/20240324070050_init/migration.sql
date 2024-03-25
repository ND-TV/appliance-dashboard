-- CreateTable
CREATE TABLE "Appliance" (
    "id" SERIAL NOT NULL,
    "days_worked" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "days_rent" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Appliance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agreement" (
    "id" SERIAL NOT NULL,
    "appliances_id" INTEGER[],
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agreement_pkey" PRIMARY KEY ("id")
);
