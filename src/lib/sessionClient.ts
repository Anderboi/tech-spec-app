import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "../types/database.types";

const supabaseClient = useSupabaseClient<Database>();
