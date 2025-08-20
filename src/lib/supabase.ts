import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oijtbzoaczfhlwpwpybc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9panRiem9hY3pmaGx3cHdweWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2NjUxMzAsImV4cCI6MjA3MTI0MTEzMH0.oSQ9AojYzdHP9PacJrmRBPd0v1JkMWdZeFkpzNFvcAI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 방명록 타입 정의
export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  likes: number;
  created_at: string;
  ip_address?: string;
}
