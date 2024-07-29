import { charm, useCharm } from '@kaigorod/charm';
import { LucideBuilding, LucideServer, LucideSmartphone } from 'lucide-react';

export const mobile = {
  name: 'mobile',
  price: 2.95,
  priceStr: '$2.95',
  title: 'Mobile',
  description: 'Best anti-detect',
  Icon: LucideSmartphone,
} as const;

export const residential = {
  name: 'residential',
  price: 2.95,
  priceStr: '$2.95',
  title: 'Residential',
  description: 'Best anti-detect',
  Icon: LucideBuilding,
} as const;

export const dataCenter = {
  name: 'dataCenter',
  price: 0.9,
  priceStr: '$0.90',
  title: 'Data center',
  description: 'More affordable',
  Icon: LucideServer,
} as const;

export const ProxyTypesByName = {
  mobile,
  residential,
  dataCenter,
} as const;

export type ProxyType =
  (typeof ProxyTypesByName)[keyof typeof ProxyTypesByName];

const proxyTypeCharm = charm<ProxyType>(mobile);
export const setProxyType = (value: ProxyType) => proxyTypeCharm.set(value);
export const getProxyType = () => proxyTypeCharm.get();
export const useProxyType = () => useCharm(proxyTypeCharm);

export function formatUsd(usd: number) {
  return Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(usd);
}
