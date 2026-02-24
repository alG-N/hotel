// Quick test script to verify Supabase S3 credentials
// Run: node test-s3.mjs

import { S3Client, ListObjectsV2Command, PutObjectCommand } from '@aws-sdk/client-s3'

const config = {
  endpoint: process.env.S3_ENDPOINT || 'https://cyljyzvgpuwpwefsfwlt.supabase.co/storage/v1/s3',
  region: process.env.S3_REGION || 'ap-southeast-1',
  bucket: process.env.S3_BUCKET || 'media',
  accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
}

console.log('=== Testing S3 Connection ===')
console.log('Endpoint:', config.endpoint)
console.log('Region:', config.region)
console.log('Bucket:', config.bucket)
console.log('Access Key ID:', config.accessKeyId ? config.accessKeyId.substring(0, 8) + '...' : 'MISSING')
console.log('Secret Key:', config.secretAccessKey ? '***set***' : 'MISSING')
console.log('')

if (!config.accessKeyId || !config.secretAccessKey) {
  console.error('❌ Missing credentials! Set S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY env vars.')
  console.log('Example: $env:S3_ACCESS_KEY_ID="your-key"; $env:S3_SECRET_ACCESS_KEY="your-secret"; node test-s3.mjs')
  process.exit(1)
}

const client = new S3Client({
  forcePathStyle: true,
  credentials: {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
  },
  region: config.region,
  endpoint: config.endpoint,
})

// Test 1: List objects
console.log('--- Test 1: ListObjects ---')
try {
  const list = await client.send(new ListObjectsV2Command({
    Bucket: config.bucket,
    MaxKeys: 5,
  }))
  console.log('✅ ListObjects OK! Found', list.KeyCount, 'objects')
} catch (err) {
  console.error('❌ ListObjects FAILED:', err.name, '-', err.message)
  if (err.name === 'SignatureDoesNotMatch') {
    console.log('')
    console.log('>>> SignatureDoesNotMatch means credentials or endpoint are WRONG.')
    console.log('>>> Check:')
    console.log('    1. S3_ENDPOINT must be: https://<PROJECT_REF>.supabase.co/storage/v1/s3')
    console.log('       (NOT .storage.supabase.co)')
    console.log('    2. Go to Supabase Dashboard > Settings > S3 Connection')
    console.log('       Generate NEW credentials and use those exact values')
    console.log('    3. S3_REGION must match your Supabase project region')
  }
  process.exit(1)
}

// Test 2: Upload small test file
console.log('')
console.log('--- Test 2: PutObject ---')
try {
  await client.send(new PutObjectCommand({
    Bucket: config.bucket,
    Key: 'test-connection.txt',
    Body: Buffer.from('S3 connection test - ' + new Date().toISOString()),
    ContentType: 'text/plain',
  }))
  console.log('✅ PutObject OK! File uploaded successfully')
  console.log('')
  console.log('🎉 All tests passed! Your S3 credentials are correct.')
} catch (err) {
  console.error('❌ PutObject FAILED:', err.name, '-', err.message)
  if (err.Code === 'SignatureDoesNotMatch' || err.name === 'SignatureDoesNotMatch') {
    console.log('>>> Credentials mismatch - regenerate S3 keys in Supabase dashboard')
  }
}
