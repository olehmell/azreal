CREATE SCHEMA IF NOT EXISTS "az_measurements";

CREATE TABLE "az_measurements"."Measurements"
(
    "sensorId"   integer,
    FOREIGN KEY ("sensorId")
        REFERENCES "az_sensors"."Sensors" ("sensorId") MATCH FULL
        ON UPDATE CASCADE,
    "timestamp"  timestamp,
    "locationId" integer NOT NULL,
    FOREIGN KEY ("locationId")
        REFERENCES "az_sensors"."Locations" ("locationId") MATCH FULL
        ON UPDATE CASCADE,

    PRIMARY KEY ("sensorId", "timestamp")
);

CREATE TABLE IF NOT EXISTS "az_measurements"."MeasurementValues"
(
    "sensorId"  integer,
    "timestamp" timestamp,
    FOREIGN KEY ("sensorId", "timestamp")
        REFERENCES "az_measurements"."Measurements" ("sensorId", "timestamp")
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    "factorId"  serial           NOT NULL,
    FOREIGN KEY ("factorId")
        REFERENCES "az_sensors"."PollutionFactors" ("factorId")
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    "value"     double precision NOT NULL,

    PRIMARY KEY ("sensorId", "timestamp")
);
