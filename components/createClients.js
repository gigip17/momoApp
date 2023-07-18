import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://yjvfyqgcpcmeingucjgj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqdmZ5cWdjcGNtZWluZ3VjamdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNzg1MjEsImV4cCI6MjAwNDY1NDUyMX0.yroOPVCvQrtBH8CYJbgRhh9Mzqllnk4L1KXHcV3TpKw"
);
