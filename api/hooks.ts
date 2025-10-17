import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from './auth';
import { referralApi } from './referral';
import { LoginRequest, RegisterRequest } from './types';

// Auth hooks
export const useLogin = () => {
  return useMutation({
    mutationFn: authApi.login,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: authApi.register,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      queryClient.clear();
    },
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: authApi.getCurrentUser,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Referral hooks
export const useReferralLink = () => {
  return useQuery({
    queryKey: ['referralLink'],
    queryFn: referralApi.getReferralLink,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useGenerateReferralLink = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: referralApi.generateReferralLink,
    onSuccess: (newLink) => {
      queryClient.setQueryData(['referralLink'], newLink);
    },
  });
};

export const useShareReferralLink = () => {
  return useMutation({
    mutationFn: referralApi.shareReferralLink,
  });
};
