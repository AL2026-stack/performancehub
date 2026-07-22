// Supabase Configuration
const SUPABASE_URL = "https://gmppbimnicvkpvhxsbby.supabase.co";
const SUPABASE_KEY = "sb_publishable_quGDn3ZVId1TobVZv8v1Mw_ptKxPqcj"; 

// Create client and assign to a distinct global variable name
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
