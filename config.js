// Supabase Configuration
window.SUPABASE_URL = "https://gmppbimnicvkpvhxsbby.supabase.co";
window.SUPABASE_KEY = "sb_publishable_quGDn3ZVId1TobVZv8v1Mw_ptKxPqcj"; 

if (window.supabase && window.supabase.createClient) {
    window.supabaseClient = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_KEY);
}
