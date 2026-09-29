export type Message = {
  id: string;
  created_at: string;
  callsign: string;
  message: string;
};

export type Database = {
  public: {
    Tables: {
      messages: {
        Row: Message;
        Insert: {
          id?: string;
          created_at?: string;
          callsign: string;
          message: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          callsign?: string;
          message?: string;
        };
        Relationships: {
          foreignKeyName: string;
          columns: string[];
          isOneToOne?: boolean;
          referencedRelation: string;
          referencedColumns: string[];
        }[];
      };
    };
    Views: {
      [key: string]: {
        Row: Record<string, unknown>;
        Relationships: [];
      };
    };
    Functions: {
      [key: string]: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
    };
  };
};
