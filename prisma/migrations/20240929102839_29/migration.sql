/*
  Warnings:

  - Added the required column `updatedAt` to the `ProductItem` table without a default value. This is not possible if the table is not empty.

*/
-- Шаг 1: Добавление столбца как NULLABLE
ALTER TABLE "ProductItem"
ADD COLUMN "updatedAt" TIMESTAMP;

-- Шаг 2: Обновление существующих записей
UPDATE "ProductItem"
SET "updatedAt" = now();

-- Шаг 3: Изменение столбца, чтобы сделать его NOT NULL
ALTER TABLE "ProductItem"
ALTER COLUMN "updatedAt" SET NOT NULL;

