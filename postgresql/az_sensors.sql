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
    "factorId"  integer                        NOT NULL,
    "name"      text                           NOT NULL,
    "label"     text                           NOT NULL,
    "unit"      "az_sensors".measurement_unit  NOT NULL,
    "maxValues" "az_sensors".measurement_value NOT NULL,
    PRIMARY KEY ("factorId"),
    UNIQUE ("factorId")
);

---

CREATE TABLE IF NOT EXISTS "az_sensors"."Locations"
(
    "locationId"    integer          NOT NULL,
    "locationPoint" point            NOT NULL,
    "elevation"     double precision NOT NULL,
    "address"       text             NOT NULL,
    "airlyLink"     text,
    "mapsLink"      text,
    "actLink"       text,
    PRIMARY KEY ("locationId"),
    UNIQUE ("locationId")
);


CREATE TABLE IF NOT EXISTS "az_sensors"."Sensors"
(
    "sensorId"     integer NOT NULL,
    "locationId"   integer NOT NULL,
    "manufacturer" text    NOT NULL,
    "model"        text    NOT NULL,
    "factors"      integer[], -- TODO: resolve referencing problem
    PRIMARY KEY ("sensorId"),
    UNIQUE ("sensorId", "locationId"),
    UNIQUE ("sensorId"),
    FOREIGN KEY ("locationId")
        REFERENCES "az_sensors"."Locations" ("locationId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
