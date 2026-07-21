// Supabase Configuration
const SUPABASE_URL = "https://gmppbimnicvkpvhxsbby.supabase.co";
const SUPABASE_KEY = "sb_publishable_quGDn3ZVId1TobVZv8v1Mw_ptKxPqcj"; // Make sure your complete publishable key is pasted here

// Initialize the Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);