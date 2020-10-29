CREATE SCHEMA IF NOT EXISTS "az_measurements";

CREATE TABLE "az_measurements"."Measurements"
(
    "locationId" integer                            NOT NULL,
    "sensorId"   integer                            NOT NULL,
    "timestamp"  "timestamp"                        NOT NULL,
    "values"     "az_sensors"."measurement_value"[] NOT NULL,
    FOREIGN KEY ("locationId")
        REFERENCES "az_sensors"."Locations" ("locationId") MATCH SIMPLE
        ON UPDATE CASCADE,
    FOREIGN KEY ("sensorId")
        REFERENCES "az_sensors"."Sensors" ("sensorId") MATCH SIMPLE
        ON UPDATE CASCADE
);