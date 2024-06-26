// lib/reactQuery-provider.tsx
 
'use client';
 
import React, { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import { trpc } from '@/trpc-client/client';
import { getBaseUrl } from '@/trpc-server/utils';
 
export const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
 
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          transformer: superjson
      }),
    ],
  });
 
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};