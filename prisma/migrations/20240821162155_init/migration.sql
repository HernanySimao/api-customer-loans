-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "name" TEXT NOT NULL,
    "income" INTEGER NOT NULL DEFAULT 0,
    "location" VARCHAR(100) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_cpf_key" ON "Client"("cpf");
