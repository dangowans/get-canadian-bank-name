import assert from 'node:assert'
import { describe, it } from 'node:test'

import { institutions } from '../institutions.js'

await describe('institutions', async () => {
  await it('Only includes valid institution codes', () => {
    for (const institutionKey of Object.keys(institutions)) {
      // eslint-disable-next-line security/detect-unsafe-regex
      assert(/^\d{5}-\d{3}$/.test(institutionKey))
    }
  })
})
