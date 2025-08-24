// API service layer for connecting to Django backend
// This provides a clean interface between React components and Django APIs

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-django-backend.herokuapp.com/api' 
  : 'http://localhost:8000/api';

// Types matching your Django models
export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'ngo' | 'pet_owner' | 'general_user';
  profile: {
    name: string;
    contact: string;
    location: string;
  };
}

export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  description: string;
  image: string;
  health_status: string;
  vaccinated: boolean;
  neutered: boolean;
  owner_type: 'ngo' | 'individual';
  owner_id: number;
  location: string;
  status: 'available' | 'pending' | 'adopted';
  created_at: string;
}

export interface LostPet {
  id: number;
  name: string;
  breed: string;
  description: string;
  image: string;
  last_seen_location: string;
  last_seen_date: string;
  owner_contact: string;
  status: 'lost' | 'found' | 'reunited';
  created_at: string;
}

export interface AdoptionRequest {
  id: number;
  pet_id: number;
  user_id: number;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export interface SuccessStory {
  id: number;
  title: string;
  description: string;
  image: string;
  pet_name: string;
  story_type: 'adoption' | 'reunion';
  created_at: string;
}

class ApiService {
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem('auth_token');
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Authentication
  async login(username: string, password: string): Promise<{ token: string; user: User }> {
    return this.request('/auth/login/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  }

  async register(userData: {
    username: string;
    email: string;
    password: string;
    role: string;
    profile: {
      name: string;
      contact: string;
      location: string;
    };
  }): Promise<{ token: string; user: User }> {
    return this.request('/auth/register/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getCurrentUser(): Promise<User> {
    return this.request('/auth/user/');
  }

  // Pets for adoption
  async getPets(filters?: {
    breed?: string;
    age?: string;
    location?: string;
    vaccinated?: boolean;
  }): Promise<Pet[]> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      });
    }
    
    const query = params.toString() ? `?${params.toString()}` : '';
    return this.request(`/pets/${query}`);
  }

  async getPet(id: number): Promise<Pet> {
    return this.request(`/pets/${id}/`);
  }

  async createPet(petData: Omit<Pet, 'id' | 'created_at'>): Promise<Pet> {
    return this.request('/pets/', {
      method: 'POST',
      body: JSON.stringify(petData),
    });
  }

  async submitAdoptionRequest(petId: number, message: string): Promise<AdoptionRequest> {
    return this.request('/adoption-requests/', {
      method: 'POST',
      body: JSON.stringify({ pet_id: petId, message }),
    });
  }

  // Lost and Found
  async reportLostPet(lostPetData: Omit<LostPet, 'id' | 'created_at'>): Promise<LostPet> {
    return this.request('/lost-pets/', {
      method: 'POST',
      body: JSON.stringify(lostPetData),
    });
  }

  async reportFoundPet(foundPetData: Omit<LostPet, 'id' | 'created_at'>): Promise<LostPet> {
    return this.request('/found-pets/', {
      method: 'POST',
      body: JSON.stringify(foundPetData),
    });
  }

  async searchLostPets(filters?: {
    breed?: string;
    location?: string;
    status?: string;
  }): Promise<LostPet[]> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      });
    }
    
    const query = params.toString() ? `?${params.toString()}` : '';
    return this.request(`/lost-pets/${query}`);
  }

  async updatePetStatus(petId: number, status: string): Promise<LostPet> {
    return this.request(`/lost-pets/${petId}/status/`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Success Stories
  async getSuccessStories(): Promise<SuccessStory[]> {
    return this.request('/success-stories/');
  }

  async createSuccessStory(storyData: Omit<SuccessStory, 'id' | 'created_at'>): Promise<SuccessStory> {
    return this.request('/success-stories/', {
      method: 'POST',
      body: JSON.stringify(storyData),
    });
  }

  // Donations
  async createDonation(donationData: {
    amount: number;
    ngo_id: number;
    message?: string;
  }): Promise<{ payment_url: string }> {
    return this.request('/donations/', {
      method: 'POST',
      body: JSON.stringify(donationData),
    });
  }
}

export const apiService = new ApiService();

// Mock data for development (remove when Django backend is ready)
export const mockData = {
  pets: [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever Mix",
      age: "3 years",
      description: "Friendly and energetic, loves playing fetch and cuddles.",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      health_status: "Excellent",
      vaccinated: true,
      neutered: true,
      owner_type: "ngo" as const,
      owner_id: 1,
      location: "Downtown Animal Shelter",
      status: "available" as const,
      created_at: "2024-01-15T10:00:00Z"
    },
    // Add more mock pets...
  ],
  
  lostPets: [
    {
      id: 1,
      name: "Max",
      breed: "German Shepherd",
      description: "Large brown and black dog, very friendly, wearing a red collar",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      last_seen_location: "Central Park, NYC",
      last_seen_date: "2024-01-20",
      owner_contact: "john@example.com",
      status: "lost" as const,
      created_at: "2024-01-20T14:30:00Z"
    },
    // Add more mock lost pets...
  ]
};