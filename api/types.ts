export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  about?: string;
  birthday?: string;
  gender?: string;
  fitness_level?: string;
  preferred_workout_types?: string[];
  fitness_goals?: string[];
  schedule?: string[];
  get_to_know_me?: string[];
  is_active: boolean;
  is_verified: boolean;
  is_locked: boolean;
  is_online: boolean;
  role: string;
  last_active_at: string;
  created_at: string;
  updated_at: string;
  latitude?: number;
  longitude?: number;
  connection_count: number;
  push_token?: string;
  partner_preferences?: {
    preferred_gender?: string;
    preferred_fitness_level?: string;
    preferred_workout_types?: string[];
    preferred_fitness_goals?: string[];
    preferred_availability?: string[];
  };
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  user: User;
  profile_completion: number;
  has_partner_preferences: boolean;
  missing_fields: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface ReferralLink {
  code: string;
  url: string;
  shareCount?: number;
  createdAt: string;
}

export interface ProfileResponse {
  user: User;
  profile_completion: number;
  missing_fields: string[];
  has_partner_preferences: boolean;
}
