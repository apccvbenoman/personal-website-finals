import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://wskntqjveeggxyqvuiaw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indza250cWp2ZWVnZ3h5cXZ1aWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDc0MzksImV4cCI6MjA1NjgyMzQzOX0.YSr7n7MBETY-fSKqN2Ko51GJ1TByv7k1eCJWN0-Sh9c')