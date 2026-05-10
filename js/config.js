// ===== Supabase Config =====
const SUPABASE_URL = 'https://lappmqyjdwtswtwauwbr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcHBtcXlqZHd0c3d0d2F1d2JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTU5NDMsImV4cCI6MjA5MjM3MTk0M30._-7_C5Mtj2Q2jiTcqYbZG8vv0WKYIZKKFH1cpisL42k';

// CDN client Supabase
const { createClient } = window.supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
