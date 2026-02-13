
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lzvxdbzkpypnmzevqicw.supabase.co'
const supabaseKey = 'sb_publishable_EfvE9K57jp5RMbEDWQKHEQ_hKFzWix3'

export const supabase = createClient(supabaseUrl, supabaseKey)
