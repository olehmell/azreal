CREATE SCHEMA IF NOT EXISTS "az_users";

CREATE TABLE IF NOT EXISTS "az_users"."Organisation"
(
    "registryNo"       integer NOT NULL,
    "fullName"         text    NOT NULL,
    "shortName"        text,
    "country"          varchar(56),
    "rntrc"            char(8) NOT NULL,
    "registryLink"     text,
    "organisationRole" text,
    "actLink"          text,
    PRIMARY KEY ("registryNo"),
    UNIQUE ("registryNo"),
    UNIQUE ("rntrc")
);

CREATE TABLE IF NOT EXISTS "az_users"."Users"
(
    "registryNo"    integer NOT NULL,
    "fullName"      text    NOT NULL,
    "email"         text,
    "phoneNumber"   text,
    "orgRegistryNo" integer,
    "userRole"      text,
    "actLink"       text,
    PRIMARY KEY ("registryNo"),
    FOREIGN KEY ("orgRegistryNo")
        REFERENCES "az_users"."Organisation" ("registryNo") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS "az_users"."UsageLog"
(
    "userRegistryNo" integer,
    "timestamp"      timestamp NOT NULL,
    "query"          text      NOT NULL,
    "queryType"      char(6)   NOT NULL,
    FOREIGN KEY ("userRegistryNo")
        REFERENCES "az_users"."Users" ("registryNo") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);
