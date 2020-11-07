CREATE SCHEMA IF NOT EXISTS "az_docs";

DO
$$
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM "pg_type" WHERE "typname" = 'service_type') THEN
            CREATE TYPE "az_docs"."service_type" AS ENUM
                ('Planned', 'Unscheduled', 'Replacement');
        END IF;

        IF NOT EXISTS(SELECT 1 FROM "pg_type" WHERE "typname" = 'document_type') THEN
            CREATE TYPE "az_docs"."document_type" AS ENUM
                ('User', 'Organisation', 'Sensor', 'Location', 'Service');
        END IF;
    END
$$;

CREATE TABLE IF NOT EXISTS "az_docs"."Documents"
(
    "documentId"   serial PRIMARY KEY,
    "documentType" "az_docs"."document_type" NOT NULL,
    "documentBody" text,
    UNIQUE ("documentId")
);

CREATE TABLE IF NOT EXISTS "az_docs"."Photo"
(
    "photoId"     serial PRIMARY KEY,
    "photoSeries" bytea[] NOT NULL,
    UNIQUE ("photoId")
);
