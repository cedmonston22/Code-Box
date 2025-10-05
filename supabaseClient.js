import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://tdwxuvcjxfwskbibkxvj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkd3h1dmNqeGZ3c2tiaWJreHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NDk1MDIsImV4cCI6MjA3NTEyNTUwMn0.lEPGeD1VdzIL20iAiUaz3oriS2wu9skSpxr2A0-qGB8"
)

export default supabase
