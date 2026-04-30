CREATE TABLE "stories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"role" text DEFAULT 'Impact Story',
	"content" text NOT NULL,
	"image_url" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
