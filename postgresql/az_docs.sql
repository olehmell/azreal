CREATE SCHEMA IF NOT EXISTS "az_docs";

DO
$$
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM "pg_type" WHERE "typname" = 'service_type') THEN
            CREATE TYPE "az_docs"."service_type" AS ENUM
                ('Planned', 'Unscheduled', 'Replacement');
        END IF;
    END
$$;

CREATE TABLE IF NOT EXISTS "az_docs"."Documents"
(
    "documentId"        integer NOT NULL,
    "documentBody" text,
    PRIMARY KEY ("documentId"),
    UNIQUE ("documentId")
);

CREATE TABLE IF NOT EXISTS "az_docs"."Photo"
(
    "photoId"  integer NOT NULL,
    "photoSeries" bytea[] NOT NULL,
    PRIMARY KEY ("photoId"),
    UNIQUE ("photoId")
);
