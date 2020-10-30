CREATE SCHEMA IF NOT EXISTS "az_users";

CREATE TABLE IF NOT EXISTS "az_users"."Organisation"
(
    "organisationId"       integer NOT NULL,
    "fullName"         text    NOT NULL,
    "shortName"        text,
    "country"          varchar(56),
    "rntrc"            char(8) NOT NULL,
    "registryLink"     text,
    "organisationRole" text,
    "actLink"          text,
    PRIMARY KEY ("organisationId"),
    UNIQUE ("organisationId"),
    UNIQUE ("rntrc")
);

CREATE TABLE IF NOT EXISTS "az_users"."Users"
(
    "userId"    integer NOT NULL,
    "fullName"      text    NOT NULL,
    "email"         text,
    "phoneNumber"   text,
    "organisationId" integer,
    "userRole"      text,
    "actLink"       text,
    PRIMARY KEY ("userId"),
    FOREIGN KEY ("organisationId")
        REFERENCES "az_users"."Organisation" ("organisationId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS "az_users"."UsageLog"
(
    "userId" integer,
    "timestamp"      timestamp NOT NULL,
    "query"          text      NOT NULL,
    "queryType"      char(6)   NOT NULL,
    FOREIGN KEY ("userId")
        REFERENCES "az_users"."Users" ("userId") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);
