(() => {
  'use strict';
  const SUPABASE_URL = 'https://ibtllazhkxiszwyaoffb.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_NYt531w5sgsywbUmmOzDPA_sYYH0mRs';
  if (!window.supabase?.createClient) {
    console.error('Supabase client library did not load.');
    return;
  }
  window.koreaEasySupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });
})();
