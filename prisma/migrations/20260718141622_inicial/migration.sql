-- CreateTable
CREATE TABLE "Tecnico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "servicio" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "calificacion" REAL NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true
);
