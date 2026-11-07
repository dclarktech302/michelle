/**
 * Single switch for election-week messaging.
 *   'before'       -> through Nov 2: "Vote Tuesday, Nov 3"
 *   'election-day' -> Nov 3: "Polls are open today until 8 PM"
 *   'after'        -> from polls closing on Nov 3 (8 PM): thank-you, no outcome claims
 * Change this one value and redeploy.
 */
export type ElectionPhase = 'before' | 'election-day' | 'after'

export const ELECTION_PHASE: ElectionPhase = 'after'

/** Label for the /get-involved link: the page becomes a thank-you / stay-connected page after the election. */
export const GET_INVOLVED_LABEL = ELECTION_PHASE === 'after' ? 'Stay Connected' : 'Get Involved'

export const POLLING_URL = 'https://voterservices.elections.maryland.gov/PollingPlaceSearch'
export const OFFICIAL_RESULTS_URL = 'https://elections.maryland.gov/'
