// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yjvfyqgcpcmeingucjgj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqdmZ5cWdjcGNtZWluZ3VjamdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNzg1MjEsImV4cCI6MjAwNDY1NDUyMX0.yroOPVCvQrtBH8CYJbgRhh9Mzqllnk4L1KXHcV3TpKw";
// Essayez avec 'sessionStorage'
const storage = "sessionStorage";
const supabase = createClient(supabaseUrl, supabaseKey, {
  persistSession: true,
  storage,
});

export default supabase;
