// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ['192.168.1.53'],
}

export default nextConfig
