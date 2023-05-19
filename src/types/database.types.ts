export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          updated_at: string | null;
          username: string | null;
          full_name: string | null;
          avatar_url: string | null;
          website: string | null;
          email: string | null;
        };
        Insert: {
          id: string;
          updated_at?: string | null;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          website?: string | null;
          email: string | null;
        };
        Update: {
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          website?: string | null;
          email: string | null;
        };
      };
      projects: {
        Row: {
          id: number;
          user_id: string;
          username: string | null;
          image: string | null;
          project_area: string | null;
          address: string | null;
          inserted_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          username?: string | null;
          image?: string | null;
          project_area?: string | null;
          address?: string | null;
          inserted_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          username?: string | null;
          image?: string | null;
          project_area?: string | null;
          address?: string | null;
          inserted_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
