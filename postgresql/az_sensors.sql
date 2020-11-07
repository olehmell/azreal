CREATE SCHEMA IF NOT EXISTS "az_sensors";

DO
$$
    BEGIN

        -- Measurement unit type
        IF NOT EXISTS(SELECT 1 FROM "pg_type" WHERE "typname" = 'measurement_unit') THEN
            CREATE TYPE "az_sensors".measurement_unit AS enum ('µg/m³', '°C', '%', 'hPa', 'km/h', '°');
        END IF;

        -- Measurement value type
        IF NOT EXISTS(SELECT 1 FROM "pg_type" WHERE "typname" = 'measurement_value') THEN
            CREATE TYPE "az_sensors".measurement_value AS
            (
                "name"  text COLLATE "pg_catalog"."C.UTF-8",
                "value" double precision
            );
        END IF;
    END
$$;

CREATE TABLE IF NOT EXISTS "az_sensors"."PollutionFactors"
(
    "factorId" serial PRIMARY KEY,
    "name"     text                          NOT NULL,
    "label"    text                          NOT NULL,
    "unit"     "az_sensors".measurement_unit NOT NULL,
--     "maxValues" "az_sensors".measurement_value NOT NULL,
    UNIQUE ("factorId")
);

---

CREATE TABLE IF NOT EXISTS "az_sensors"."Locations"
(
    "locationId"    integer          NOT NULL,
    "locationPoint" point            NOT NULL,
    "elevation"     double precision NOT NULL,
    "address"       text,
    "airlyLink"     text,
    "mapsLink"      text,
    "documentId"    serial,
    FOREIGN KEY ("documentId")
        REFERENCES "az_docs"."Documents" ("documentId")
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    PRIMARY KEY ("locationId"),
    UNIQUE ("locationId")
);

---

CREATE TABLE IF NOT EXISTS "az_sensors"."Sensors"
(
    "sensorId"     integer PRIMARY KEY,
    "locationId"   integer NOT NULL,
    FOREIGN KEY ("locationId")
        REFERENCES "az_sensors"."Locations" ("locationId") MATCH FULL
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    "manufacturer" text,
    "model"        text,
    UNIQUE ("sensorId", "locationId"),
    UNIQUE ("sensorId")
);

---

CREATE TABLE IF NOT EXISTS "az_sensors"."SensorFactors"
(
    "sensorId" integer NOT NULL,
    FOREIGN KEY ("sensorId")
        REFERENCES "az_sensors"."Sensors" ("sensorId") MATCH FULL
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    "factorId" integer,
    FOREIGN KEY ("factorId")
        REFERENCES "az_sensors"."PollutionFactors" ("factorId") MATCH FULL
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    UNIQUE ("sensorId", "factorId")
);

CREATE TABLE IF NOT EXISTS "az_sensors"."ServiceLog"
(
    "timestamp"   "timestamp" DEFAULT now() NOT NULL,
    "serviceType" "az_docs"."service_type"  NOT NULL,
    "sensorId"    integer                   NOT NULL,
    FOREIGN KEY ("sensorId")
        REFERENCES "az_sensors"."Sensors" ("sensorId") MATCH FULL
        ON UPDATE CASCADE
        ON DELETE NO ACTION,
    "locationId"  integer,
    FOREIGN KEY ("locationId")
        REFERENCES "az_sensors"."Locations" ("locationId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    "documentId"  serial,
    FOREIGN KEY ("documentId")
        REFERENCES "az_docs"."Documents" ("documentId") MATCH FULL
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    "photoId"     integer,
    FOREIGN KEY ("photoId")
        REFERENCES "az_docs"."Photo" ("photoId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);
