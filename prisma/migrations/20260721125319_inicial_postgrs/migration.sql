-- CreateTable
CREATE TABLE "Tecnico" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "servicio" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "calificacion" DOUBLE PRECISION NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Tecnico_pkey" PRIMARY KEY ("id")
);
