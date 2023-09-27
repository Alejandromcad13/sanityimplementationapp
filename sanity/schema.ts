import { type SchemaTypeDefinition } from 'sanity'
import profile from './schemas/profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile],
}
