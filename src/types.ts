export interface UserData {
  name: string;
  specialty: string;
  license: string;
  email: string;
}

export type ScreenState = 'registration' | 'trivia' | 'results' | 'vademecum';
