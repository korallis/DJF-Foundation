import {
  pgTable,
  text,
  timestamp,
  jsonb,
  pgEnum,
  uuid,
  varchar,
  integer,
  uniqueIndex,
} from "drizzle-orm/pg-core";


/* -----------------------------------------------------
   Enums
----------------------------------------------------- */
export const userRoleEnum = pgEnum("user_role", ["admin", "user"]);

export const invitationStatusEnum = pgEnum("invitation_status", [
  "pending",
  "accepted",
  "expired",
]);

export const jobStatusEnum = pgEnum("job_status", ["Open", "Closed"]);

/* -----------------------------------------------------
   Users (assumed – referenced by your schema)
----------------------------------------------------- */

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    password: varchar("password", { length: 255 }).notNull(),
    role: userRoleEnum("role").default("user").notNull(),
  },
  (table) => [uniqueIndex("users_email_idx").on(table.email)],
);

export const invitations = pgTable("invitations", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").unique().notNull(),
  token: text("token").unique().notNull(), // A secure random string
  role: text("role").default("user"),
  expiresAt: timestamp("expires_at").notNull(),
  status: invitationStatusEnum("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});


export const pages = pgTable("pages", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").unique().notNull(),
  content: jsonb("content").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* -----------------------------------------------------
   Audit Logs
----------------------------------------------------- */

export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  action: text("action").notNull(),
  resource: text("resource"),
  resourceId: text("resource_id"),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});