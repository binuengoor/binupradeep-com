// The travelogue feature pages (/travel/<slug>/). Story text: src/travel/<slug>/story.md. Photos: src/assets/travel/<slug>/.
// Eurotrip 2024 ("Binario") has its own hand-built page and is only listed here for the "more trips" strip.
export interface Trip {
  slug: string;
  title: string;          // big heading
  sub: string;            // line under the heading
  kicker: string;         // small caps line above the heading
  description: string;    // meta description
  blogPath: string;       // the teaser post in the blog
  accent: 'rust' | 'teal' | 'orange';
  heroAlt: string;
  heroCaption?: string;
  stats: [string, string][];   // label / value chips under the heading
}

export const trips: Trip[] = [
  {
    slug: 'tour-de-west',
    title: 'Tour de West',
    sub: 'The one with the Hobo, the Tree Man, the Hungry Hog, Mr. Vertigo and the Headmaster',
    kicker: 'April 2017 · Death Valley, Bryce, Zion, Valley of Fire',
    description: 'Three days, five friends and one rented Chrysler Pacifica through Death Valley, Bryce Canyon, Zion and Valley of Fire. A travelogue by Binu Pradeep.',
    blogPath: '/blog/tour-de-west/',
    accent: 'rust',
    heroAlt: "The white salt flats of Badwater Basin seen from Dante's View in Death Valley",
    heroCaption: "Dante's View, Death Valley",
    stats: [['When', '21–24 Apr 2017'], ['Where', 'CA · NV · UT'], ['Days', '3'], ['Crew', '5']],
  },
  {
    slug: 'tour-de-maine',
    title: 'Tour de Maine',
    sub: 'The sequel: the Hobo, Mr. No-Wallet and the Headmaster take on Acadia',
    kicker: 'May 2017 · Acadia National Park, Maine',
    description: 'A last-minute long weekend in Acadia National Park: Beehive Trail, Sargent Mountain, a lost lens and a lobster nobody knew how to open. A travelogue by Binu Pradeep.',
    blogPath: '/blog/tour-de-maine/',
    accent: 'teal',
    heroAlt: 'Sand Beach and the green hills of Acadia seen from above',
    heroCaption: 'Sand Beach, Acadia',
    stats: [['When', '26–29 May 2017'], ['Where', 'Acadia, Maine'], ['Days', '3'], ['Crew', '3']],
  },
  {
    slug: 'hyderabad-2010',
    title: 'Idiots in Town',
    sub: 'An unplanned trip to Hyderabad, in timestamps',
    kicker: 'October 2010 · Thrissur to Hyderabad by train',
    description: 'Three friends, a family Daewoo Matiz, Snow World, Ramoji Film City and a very long way home. A diary-style travelogue by Binu Pradeep.',
    blogPath: '/blog/idiots-in-town/',
    accent: 'orange',
    heroAlt: 'Blue laser silhouettes of two people holding hands at the Lumbini Park laser show in Hyderabad',
    heroCaption: 'Laser show, Lumbini Park',
    stats: [['When', '7–13 Oct 2010'], ['Where', 'Hyderabad'], ['Days', '7'], ['Crew', '3']],
  },
];

export const otherTrips = [
  { slug: 'eurotrip-2024', title: 'Rome Looked Like a Movie and Felt Like Home', kicker: 'Eurotrip 2024 · Italy & Switzerland', cover: '/travel/eurotrip-2024/og.jpg' },
  ...trips.map((t) => ({ slug: t.slug, title: t.title, kicker: t.kicker, cover: `/travel/${t.slug}/og.jpg` })),
];
