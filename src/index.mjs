import assert from 'node:assert/strict';
import { createTopicTagger } from '@x12i/text-topics';

const tagger = createTopicTagger({ taxonomy: { id: 'support', revision: '1', topics: [{
  id: 'billing', label: 'Billing', language: 'en', minScore: 3,
  signals: [{ id: 'refund', kind: 'phrase', value: 'refund', weight: 2 }, { id: 'pending', kind: 'phrase', value: 'pending', weight: 1 }],
  rules: [{ id: 'status', scope: 'segment', groups: [['refund'], ['pending']] }],
}] } });
const text = 'The refund is pending';
const result = tagger.tag({ documentId: 'message-1', revision: '1', text, segments: [{
  id: 'body', zone: 'content', path: '/body', text, language: 'en', kind: 'prose', source: { start: 0, end: text.length },
}] });
assert.equal(result.items[0].topicId, 'billing');
assert.equal(result.items[0].score, 3);
assert(result.items[0].evidence.length > 0);
console.log(JSON.stringify(result, null, 2));
// A tag means these rules matched; it is not a decision about refund eligibility.
