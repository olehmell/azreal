CREATE SCHEMA IF NOT EXISTS "az_sensors";

CREATE TABLE IF NOT EXISTS "az_sensors"."e_service_type"
(
    "value"       text PRIMARY KEY,
    "description" text
);
INSERT INTO "az_sensors"."e_service_type" ("value")
VALUES ('Planned'),
       ('Unscheduled'),
       ('Replacement');

CREATE TABLE IF NOT EXISTS "az_sensors"."e_measurement_unit"
(
    "value"       text PRIMARY KEY,
    "description" text
);
-- TODO: maybe do this automated?
INSERT INTO "az_sensors"."e_measurement_unit" ("value", "description")
VALUES ('mcgpcm', 'µg/m³'),
       ('celsium', '°C'),
       ('percent', '%'),
       ('hPa', 'hPa'),
       ('kmph', 'km/h'),
       ('degree', '°');

CREATE TABLE IF NOT EXISTS "az_sensors"."PollutionFactors"
(
    "factorId" serial PRIMARY KEY,
    "name"     text             NOT NULL,
    "label"    text             NOT NULL,
    "unit"     text             NOT NULL,
    FOREIGN KEY ("unit")
        REFERENCES "az_sensors"."e_measurement_unit" ("value")
        ON UPDATE CASCADE
        ON DELETE SET DEFAULT,
    "maxValue" double precision NOT NULL
);

---

CREATE TABLE IF NOT EXISTS "az_sensors"."Locations"
(
    "locationId"    integer PRIMARY KEY,
    "locationPoint" point            NOT NULL,
    "elevation"     double precision NOT NULL,
    "address"       text,
    "airlyLink"     text,
    "mapsLink"      text,
    "documentId"    serial,
    FOREIGN KEY ("documentId")
        REFERENCES "az_docs"."Documents" ("documentId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
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
    UNIQUE ("sensorId", "locationId")
);

---

CREATE TABLE IF NOT EXISTS "az_sensors"."SensorFactors"
(
    "sensorId" integer NOT NULL,
    FOREIGN KEY ("sensorId")
        REFERENCES "az_sensors"."Sensors" ("sensorId") MATCH FULL
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    "factorId" integer NOT NULL,
    FOREIGN KEY ("factorId")
        REFERENCES "az_sensors"."PollutionFactors" ("factorId") MATCH FULL
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    UNIQUE ("sensorId", "factorId")
);

CREATE TABLE IF NOT EXISTS "az_sensors"."ServiceLog"
(
    "timestamp"   "timestamp" DEFAULT NOW() NOT NULL,
    "serviceType" text                      NOT NULL,
    FOREIGN KEY ("serviceType")
        REFERENCES "az_sensors"."e_service_type" MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET DEFAULT,
    "sensorId"    integer                   NOT NULL,
    FOREIGN KEY ("sensorId")
        REFERENCES "az_sensors"."Sensors" ("sensorId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
--     TODO: do we need this?
    "locationId"  integer,
    FOREIGN KEY ("locationId")
        REFERENCES "az_sensors"."Locations" ("locationId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    "documentId"  serial,
    FOREIGN KEY ("documentId")
        REFERENCES "az_docs"."Documents" ("documentId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    "photoId"     integer,
    FOREIGN KEY ("photoId")
        REFERENCES "az_docs"."Photo" ("photoId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);
